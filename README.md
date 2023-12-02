# pxrem 👾

_Tiny cli program to calculate values between px & rem._

## Examples

Using it normally (px to rem)

```bash
pxrem 1
# 1px : 0.625rem
```

Using reverse (rem to px)

```bash
pxrem -r 1
# 1rem : 16px
```

You can also pass it multiple values at a time

```bash
pxrem 1 2 3
# 1px : 0.0625rem
# 2px : 0.125rem
# 3px : 0.1875rem
```

Changing the base value (`16` by default)

```bash
pxrem -b=10 1 2 3
# 1px : 0.1rem
# 2px : 0.2rem
# 3px : 0.3rem
```

## Install

run the following commands:

```
git clone git@github.com:SH0PK33P3R/pxrem.git
cd pxrem
yarn
yarn build
```

This will give you an executable `pxrem` file that you can place in your $PATH.
