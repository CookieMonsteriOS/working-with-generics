# Working With Generics

This TypeScript code defines three interfaces: `BaseItem`, `ItemA`, and `ItemB`.

- `BaseItem`: An interface with a single property `id` of type `number`.
- `ItemA`: Extends `BaseItem` and adds properties `type` (with value `'A'`) and `value` of type `number`.
- `ItemB`: Also extends `BaseItem` and adds properties `type` (with value `'B'`) and `value` of type `string`.

The `data` array is a collection of objects that can be either `ItemA` or `ItemB`.

```typescript
interface BaseItem {
    id: number;
}

interface ItemA extends BaseItem {
    type: 'A';
    value: number;
}

interface ItemB extends BaseItem {
    type: 'B';
    value: string;
}

const data: (ItemA | ItemB)[] = [
    { id: 1, type: 'A', value: 10 },
    { id: 2, type: 'B', value: 'apple' },
    { id: 3, type: 'A', value: 20 },
    { id: 4, type: 'B', value: 'banana' },
];
