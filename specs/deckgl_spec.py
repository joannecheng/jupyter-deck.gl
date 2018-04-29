from mamba import description, context, it
from expects import expect, equal

import deckgl

with description("HexagonLayer") as self:
    with it("#convert_coords converts first two arguments to JS object"):
        lngs= [4, 5, 6]
        lats = [1, 2, 3]

        expect(deckgl.convert_coords(lngs, lats)).to(
            equal("[[4, 1], [5, 2], [6, 3]]"))
