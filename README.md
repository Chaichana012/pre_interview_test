# pre_interview_test

A TypeScript implementation of a merge function that combines three arrays into a single sorted array (ascending) without using any sort functions.

## Function

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

| Parameter | Order |
|-----------|-------|
| `collection_1` | Pre-sorted ascending |
| `collection_2` | Pre-sorted descending |
| `collection_3` | Pre-sorted ascending |

**Returns:** A single array sorted ascending.

## Algorithm

Uses a **3-pointer K-Way Merge** approach:
- Traverse `collection_2` in reverse (read descending array as ascending without sorting)
- At each step, pick the minimum value among the three current pointers
- Time complexity: **O(n₁ + n₂ + n₃)**
- No sort functions used

## Prerequisites

- Node.js >= 16
- npm >= 8

## Setup

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Build

```bash
npm run build
```

Output will be compiled to `./dist`

## Project Structure

```
pre_interview_test/
├── src/
│   ├── merge.ts        # Function implementation
│   └── merge.test.ts   # Unit tests
├── jest.config.js
├── tsconfig.json
└── package.json
```
