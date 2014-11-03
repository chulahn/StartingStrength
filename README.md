StartingStrength
================
<a href="chulahn.github.io/StartingStrength">Link to the app</a>
<h3>About</h3>
This web-app is for those who follow Rippetoe's Starting Strength or a similar compound exercise routine.  It calculates how much weight and the number of reps to warm up with.  It also shows what plates to add for example, 65lbs would show (10x1) which means to add a 10lb plate to each side of the bar.

<h3>Why?</h3>
I came across warmupreps.com one day and I enjoyed using the site myself when I was doing Rippetoe's Starting Strength.  I found it very helpful to know what weights to warm up with and the plates to add to the bar.  I wanted to recreate this app while adding more features.  It was a perfect opportunity to learn how JQueryMobile works.

<h3>Features</h3>
<ul>
<li>Plate Math</li>
<li>One Rep Max Calculator</li>
<li>Comparisons to Exrx.net Strength Standards</li>
<li>Shows Workout of the day</li>
<li>Set custom plates</li>
</ul>

<h3>How to use this app</h3>
<ol>
  <li>Go to settings and set the following: 
    <ul>
      <li>Weight system (lb/kg) 
      <li>Gender
      <li>Bodyweight
      <li>How you want warmups to be calculated  
      <ul>
        <li>By default, warmups are set to Barx5(Reps)x2(Sets), 40% Working Weight x5x1, 60%x3x1, 80%x2x1, 100%(Working Weight)x5x3.
      </ul>  
      <li>Toggle plates to use 
      <ul>
        <li>You may add custom plates (55lb, 25kg, 1.25 lb, etc)
        <ul>
          <li>If you set a custom plate, toggle it on and off to so it can be used during plate conversion.
        </ul>
      </ul>
    </ul>
  <li>After settings, click the exercise you want to you want know the warmups.  Either type in the working weight or use the slider.
  <li>Your warmups have been calculated, as well as what plates to add.  Lift!
  <li>Your one rep max has also been calculated.  Based on this value, your weight and gender, your category for this lift is shown.  (Untrained, Novice, Intermediate, etc)
    <ul>
      <li>Click the Strength Standards table to see a more detailed table.
    </ul>
  <li>Repeat steps 2 and 3 for each exercise.
  <li>Your working weight for each exercise have been saved.  Now click workouts.
  <li>Drag and drop the exercises you want to do for each day.
    <ul>
      <li>You can always come to this page to see what lifts with all calculated sets needs to be done for the day.
      <li><b>Mobile Device Users</b>:  If a tab won't expand, try tapping around the edges of the workout instead of the center.
    </ul>
  <li>Your lifts have been saved, get some rest.  Next time you lift, your information will be here so incrementing will be easy
</ol>

<h3>How was it made?</h3>
<ul>
  <li><b>JQuery</b> - Creating pages and event-handling
  <li><b>JQueryMobile</b> - Interface and collapsible divs
  <li><b>JQueryUI</b> - sortable to allow exercises to be dragged and dropped
  <li><b>JQueryUI Touch Punch</b> - allow the drag and drop features to work on touch-screen devices.
</ul>

