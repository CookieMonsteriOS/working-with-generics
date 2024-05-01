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


function filterByPropertyValue<Item extends BaseItem>(data: Item[], propertyName: 'type' | 'value', value: string | number): Item[] {
    return data.filter((item) => item[propertyName] === value);
}

const result = filterByPropertyValue(data,'value', 10)
console.log(result)

