# Datavant Take Home Assessment (Playwright)

### Oddities

Using the fill command in playwright does not enable the typeahead for station selection.
To mitigate this without hacks I used `pressSequentially` which types each character sequentially. A majority of users likely select from the typeahead which is why I opted to use it instead of typing the station directly in the field.

* The calendar time is portuguese time so if you want to book a train for today if will be disabled at midnight portugal time.

### Improvements

* The calendar widget can be improved by indicating it's not disabled as an attribute.
* The angular action to render the previously selected values in the forms is slow. On slower connections this can cause overlap with user input.

### Citations

<https://playwright.dev/>
<https://github.com/playwright-community/eslint-plugin-playwright?tab=readme-ov-file>
<https://eslint.org/>
https://momentjs.com/docs/#/get-set/date/
<https://axolo.co/blog/p/part-3-github-pull-request-template>
<https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow>
List of timezone ids: <https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt>
