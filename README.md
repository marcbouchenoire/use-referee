# use-referee

⚽ A collection of ref-related hooks.

[![build](https://github.com/bouchenoiremarc/use-referee/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bouchenoiremarc/use-referee/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/use-referee?color=%230cf)](https://www.npmjs.com/package/use-referee) [![gzipped](https://img.shields.io/bundlephobia/minzip/use-referee?label=gzipped&color=%2385f)](https://www.npmjs.com/package/use-referee) [![license](https://img.shields.io/github/license/bouchenoiremarc/use-referee?color=%23e4b)](https://github.com/bouchenoiremarc/use-referee/blob/main/LICENSE)

## Installation

#### Skypack

```javascript
import {
  useConstant,
  useLatest,
  usePrevious,
  useRefs
} from "https://cdn.skypack.dev/use-referee"
```

#### Yarn

```bash
yarn add use-referee
```

#### npm

```bash
npm install use-referee
```

## `useConstant`

```typescript
useConstant<T>(value: Lazy<T>) => T
```

Given a (lazy) variable, `useConstant` will return it as is while never updating or mutating it on subsequent changes.

### Usage

Import `useConstant`.

```typescript
import { useConstant } from "use-referee"
```

Declare a constant from an initial (lazy) value.

```typescript
const id = useConstant(() => uuid())

// id: "123e4567-e89b-12d3-a456-426614174000"
```

## `useLatest`

```typescript
useLatest<T>(value: T): MutableRefObject<T>
```

Given a variable, `useLatest` will return a ref which reflects its latest value—mutating itself on variable changes to do so.

### Usage

Import `useLatest`.

```typescript
import { useLatest } from "use-referee"
```

Pass it a variable and get a mutating ref of its latest value in return.

```typescript
const [state, setState] = useState(false)
const latest = useLatest(state)

// latest: { current: false }
```

Being a ref, `latest` will always reflect the latest `state` value even when omitted from dependency lists (e.g. `[]`).

```typescript
setState(true)

useEffect(() => {
  // latest: { current: true }
}, [])
```

## `usePrevious`

```typescript
usePrevious<T>(value: T) => T | undefined
```

Given a variable, `usePrevious` will return its previous value or `undefined` before an initial change has happened.

### Usage

Import `usePrevious`.

```typescript
import { usePrevious } from "use-referee"
```

Pass it a variable and get its previous value in return.

```typescript
const [state, setState] = useState(false)
const previous = usePrevious(state)

// previous: undefined

setState(true)

// previous: false

setState(false)

// previous: true
```

## `useRefs`

```typescript
useRefs<T>(...refs: Ref<T>[]) => RefCallback<T>
```

Given any number of refs, `useRefs` will return a single callback ref that merges them all.

### Usage

Import `useRefs`.

```typescript
import { useRefs } from "use-referee"
```

Pass it multiple refs and get a single ref in return.

```tsx
const refs = useRefs(ref, forwardedRef)

return <div ref={refs} />

// ref: { current: <div /> }
// forwardedRef: { current: <div /> }
```
