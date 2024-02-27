# Basic Style Dictionary + Utopia Core Transform

This example is based on the bare-bones [Style Dictionary basic init](https://amzn.github.io/style-dictionary/#/quick_start?id=creating-a-new-project). It also include Utopia Core to demo using it as a Style Dictionary Transform. Clone this repository and from its directory to install and run it and see the output of the transform.

## Install

```bash
npm install
```

### Example 'extensions'

We can add some clamped font-sizes using an [Utopia Core](https://github.com/trys/utopia-core) configuration. The [`font.json`](tokens/size/font.json) already as a [W3C Design Token `$extensions`](https://design-tokens.github.io/community-group/format/#extensions) example:

```json
"medium": {
	"value": "1",
	"comment": "the medium size of the font",
	"$extensions": {
		"utopia.calculate.clamp": {
			"minSize": "16",
			"maxSize": "18"
		}
	}
},
```

You can also generate a complete scale from a single token

```json
{
  "scales": {
    "value": "1",
    "$extensions": {
      "utopia.type.scales": {
        "minWidth": "{layout.breakpoint.mobile.value}",
        "maxWidth": "{layout.breakpoint.desktop.value}",
        "minFontSize": "16",
        "maxFontSize": "18",
        "minTypeScale": "1.2",
        "maxTypeScale": "1.25",
        "positiveSteps": "4",
        "negativeSteps": "2"
      }
    }
  }
}
```

## Build

Run a build after installing (`npm install`) to generate some type scales!
```bash
npm run build
```

You should see something like this output:

```css
✔︎  build/css/_variables.css
✔︎  build/css/_scales.css
```

The scale generated can be viewed in the build folder. This beats manually copy &amp; pasting [the same values from the Utopia site](https://utopia.fyi/type/calculator?c=420,16,1.2,1280,18,1.25,4,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12).
