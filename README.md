# Datavant Take Home Assessment (Playwright)

### Oddities

Using the fill command in playwright does not enable the typeahead for station selection.
To mitigate this without hacks I used `pressSequentially` which types each character sequentially. A majority of users likely select from the typeahead which is why I opted to use it instead of typing the station directly in the field.

### Citations

<https://playwright.dev/>
List of timezone ids: <https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt>
