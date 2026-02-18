# ⚠️ WRONG LOCATION - DO NOT USE THIS FOLDER

## 🚨 Important: Images should go in `public/photos/` instead!

This `src/photos/` folder will NOT work for blog images because React cannot access them via absolute paths.

## ✅ Correct Location:

**Place all blog images in:** `public/photos/`

Navigate to:
```
sarthakk27.github.io/public/photos/
```

## Why?

In React:
- Images in `public/` folder can be accessed via `/photos/image.png`
- Images in `src/` folder need to be imported (not practical for blog content)

## Quick Fix:

If you added images here by mistake, simply move them to:
```
public/photos/
```

Then they'll work immediately with the same reference path:
```javascript
${createImage('/photos/your-image.png', 'Alt text', 'Caption')}
```

---

**See `public/photos/README.md` for full instructions.**
