# Inconsistent Parent Screen Updates in React Navigation Nested Stack with TabNavigator

This repository demonstrates a bug in React Native where nested navigation within a TabNavigator leads to inconsistent updates in parent screens. After navigating deeply into a nested stack, parent screens may display stale data or UI elements. The issue's inconsistency adds to debugging difficulty.

## Bug Description

When navigating through multiple screens within a nested stack navigated from a TabNavigator, parent screens sometimes fail to re-render with updated data or UI changes. This creates a mismatch between the application state and what's displayed, leading to a poor user experience.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` or `yarn install` to install the necessary packages.
3. Run the app using a simulator or physical device.
4. Navigate through the tab navigator to the nested stack navigator.
5. Perform deep navigation within the nested stack.
6. Observe that upon returning to previous screens in the navigation hierarchy, those screens might not be updated as expected.

## Solution

The solution involves ensuring proper component lifecycle management and data flow within the nested navigation structure. Techniques like using React's `useEffect` hook to trigger re-renders based on relevant state changes or using React Context API for efficient state management are employed to address the issue.

## Technologies Used

* React Native
* React Navigation
* Javascript
