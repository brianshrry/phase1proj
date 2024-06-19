I attempted to automate the functionalities outlined in the related documentation. I've explained 
the issues with each test scenario in the code of each file, but to summarize: dropdown menus weren't
appearing in cypress, so they weren't able to be selected and the options on those menus couldn't be
clicked. That means trying to automate everything after that as outlined in the documentation would
fail. The documentation would need to be rewritten with this in mind, plus the lack of a login button
on the home page when viewing it in cypress.

Interestingly, in the middle of this writing, I inspected the elements in the home page on cypress,
and theres's no discrepency in the elements at all. The button is there and it registers as a button
based on the code, even on cypress, but the button doesn't appear, likely due to a bug in cypress.
