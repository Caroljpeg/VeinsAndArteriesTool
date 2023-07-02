main();

function main() {
    //define page width and height (in mm)
    var pw = yourPageWidth;
    var ph = yourPageHeight;

    var doc_setup = app.activeDocument;
    var doc = doc_setup;
    var word = 'yourWord';
    
    //find in a specified inDesign document (first parameter: 'doc') all the iterations of a specified word (second parameter: 'word') -> see line 153
    var resultsOfSearch = textFindWord(doc, word);

    alert('Questo è il risultato della ricerca:\n'+resultsOfSearch.toSource().split(',').join('\n'));
    
    //define the x and y position of the final point (in mm)
    var originX = 540;
    var originY = 810;

    //define all the x values (in mm) of the anchor points you will need
    var x1 = yourXValue;
    var x2 = yourXValue2
    //var x3 = yourXValue3
    //define ad many x valuse as you wish adding
    //var x = yourXValue;
    //you can use random values through the function genRand adding
    //var x = genRand(min, max, decimalPlaces); -> see line 140

    //define all the y values (in mm) of the anchor points you will need
    var y1 = yourYValue;
    var y2 = yourYValue2
    //var y3 = yourYValue3
    //define ad many y valuse as you wish adding
    //var y = yourYValue;
    //you can use random values through the function genRand adding
    //var y = genRand(min, max, decimalPlaces); -> see line 140


    //set a loop that iterates through the results of the textFindWord() function and store its coordinates in an array with the path of anchor points the line has to pass through until the defined origin point
    for(var i = 0; i < resultsOfSearch.length;i++){

        //store the word's position x and y value
        var resX = resultsOfSearch[i].position[0];
        var resY = resultsOfSearch[i].position[1];
        
        var paths = {
            'anchorsPath1':[
                [resX,resY],
                [x1, y1],
                //define as many anchor points as you wish adding
                //[x, y],
                [originX, originY],
            ],

            'anchorsPath2':[
                [resX,resY],
                [x1, y2],
                //define as many anchor points as you wish adding
                //[x, y],
                [originX, originY],
            ],

            //define as many path as you wish adding
            //'ancorPath':[
                //[resX, resY],
                //...
                //[originX, originY],
            //]
        };
    

        //create a line
        var graphicLine = doc.graphicLines.add();

            //make all the lines pass through the anchor points of the same path
            for (var j in paths.anchorsPath1) {
                var point = graphicLine.paths[0].pathPoints[j];
                if (j < 2) {
                    point.anchor = paths.anchorsPath1[j];
                }
                else {
                    point = graphicLine.paths[0].pathPoints.add();
                    point.anchor = paths.anchorsPath1[j];            
                }
            }

            //you can use an if chain to determine what path to follow, if you defined more than one possible path

            //anchorPath1
            if (yourCondition) {
                for (var k in paths.anchorsPath1) {
                    var point = graphicLine.paths[0].pathPoints[k];
                    if (k < 2) {
                        point.anchor = paths.anchorsPath1[k];
                    }
                    else {
                        point = graphicLine.paths[0].pathPoints.add();
                        point.anchor = paths.anchorsPath1[k];            
                    }
                }
            }

            //anchorPath2
            if (yourCondition) {
                for (var k in paths.anchorsPath2) {
                    var point = graphicLine.paths[0].pathPoints[k];
                    if (k < 2) {
                        point.anchor = paths.anchorsPath2[k];
                    }
                    else {
                        point = graphicLine.paths[0].pathPoints.add();
                        point.anchor = paths.anchorsPath2[k];            
                    }
                }
            }

            //define as many variants as you wish adding
            //if (yourCondition2) {
                //for (var l in paths.anchorsPath){
                    //if (l < 2) {
                        //point.anchor = paths.anchorsPath[l];
                    //}
                    //else {
                        //point = graphicLine.paths[0].pathPoints.add();
                        //point.anchor = paths.anchorsPath[l];
                    //}
                //}
            //}
  };
}





//use this function to add random values in your code
//just write, instead of a numeric value, the expression genRand(min, max, decimalPlaces)
//min -> minimum value for the function to choose
//max -> maximum value for the function to choose
//decimalPlaces -> number of decimal position for the output value (if you want an integer insert 0) 
function genRand (min, max, decimalPlaces) {
    var result = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    var result = Math.floor(result * power) / power;
return result;
}





function textFindWord(doc, wordString){
    //format the inDesign's research preferences
    app.findTextPreferences = NothingEnum.nothing;
    app.changeTextPreferences = NothingEnum.nothing;

    //create an array that will be used to store the x and y position of every iteration of the word
    var result = new Array(); 

    //define the word to search recalling the variable wordString, defined in the main() function -> see line 13
    app.findTextPreferences.findWhat = wordString;
    //store the results of search in the findTextResults variable
    var findTextResults = doc.findText();

    //set a loop to store the x and y positions ad many times as the word is repeated in the text
    for(var i = 0; i < findTextResults.length; i++){

        //you can choose to use as reference for the x value the left or right limit of the word's bounding box, just change the last part of this expression
        //'horizontalOffset' -> the x is located at the beginning of the word
        //'endHorizontalOffset' -> the x is located at the end of the word
        var x = findTextResults[i].horizontalOffset;

        //you can choose to use as reference for the y value the top or bottom limit of the word's bounding box, just change the last part of this expression
        //'baseline' -> the y value is located at the bottom of the word
        //'endBaseline' -> the y value is located at the top of the word
        var y = findTextResults[i].baseline;

      //store in the result array an object that contains the word and its x and y coordinates
      result.push({'word':wordString, 'position':[x,y]});
    }

    return result;
}