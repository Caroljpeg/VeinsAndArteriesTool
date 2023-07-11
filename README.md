# veins and arteries tool
an inDesign script developed by [caroljpeg](https://www.instagram.com/carol.jpegg/) to realize Descrizione di una battaglia.  
if you're interested in the project, you can read more about it at this link [descrizione di una battaglia](https://caroljpeg.github.io/Andrea_Martinelli/editory/descrizione_di_una_battaglia.html)

![IMG_1721](https://github.com/Caroljpeg/VeinsAndArteriesTool/assets/84567872/1a4888ff-8ec4-4e4f-a871-90e2172e369e)


*note that this is not the complete code used in the project: if you want to give it a look,  
you can find it in [this github repository](https://github.com/Caroljpeg/Descrizione_di_una_battaglia)*

this release is intended to be an open source generalization of the tool i developed to realize my project.  
if you have any question or you want to share what you used it for, feel free to contact me at a.martinelli0601@gmail.com

## description
this script allows you to find every iterations of a word in the page of an indesign document and creates a line  
that starts from each one of the iterations and follows a series of anchor points provided by the user

## script setup
in order to get ready to use this script, you firstly need to download this respository.  
once you've done it open the VeinsAndArteriesTool.jsx file in your code editor.
1. ### general instructions
   1. define the width and height of your page at line 5-6
      
   3. define the word you want the lines to start from at line 10
      
   5. define the x and y value for the point you want the lines to converge (line 18-19)
      
   7. define the x and y value of the anchor points you want the lines to pass through (lines 17-37).  
   for each value you need, you just have to add `var x = yourXValue;`  and/or `var y = yourYValue;`  
   in simple systems you may skip this step and specify those values during the following one.

2. ### if you want all the lines to follow the same path
   4. combine the x and y values you defined before for a single anchorPath in the array paths (lines 47-69).
   your code should look like this:
   ```
   var paths = {
   'anchorPath':[
   [resX, resY],
   [x, y],
   [...]
   [originX, originY]
   ]
   }
   ```
   
   5. use the code provided at lines 76-86.

3. ### if you want  the lines to follow different paths according to conditions of your choice
   4. repeat the process described in 2.iv as many times as you wish, remembering to assign different names to the paths.
      
   6. use the code provided at lines 90-129, replacing `yourCondition` and `yourCondition2` with your own conditions
      and defining, for every condition, the path you want to be used in that specific case.
      
4. ### more implementations
   you can addrandom values at every step of the function using the genRand function provided at lines 137-147.
   just write, instead of a numeric value, the expression `genRand(min, max, decimalPlaces)`,  
   where min is the minimum value for the function to choose, max is the maximum value for the function to choose  
   and decimalPlaces is the number of decimal position for the output value (if you want an integer insert 0).

## execution
once you completed this steps you can save the script in the scripts folder:  
on macos  
`/Users/<username>/Library/Preferences/Adobe InDesign/Version 18.0/<locale>/Scripts`  
on windows  
`C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Version 18.0\<locale>\Scripts`  

now open indesign, go to the scripts panel and simply doubleclick on VeinsAndArteriesTool.jsx.
