function getDescendants(familyTree) {
    let descendants = [];

    function recurse(tree) {
        if (tree.children && tree.children.length > 0) {
            for (const child of tree.children) {
                descendants.push(child.name);
                recurse(child);
            }
        }
    }

    recurse(familyTree);
    return descendants;
}

// Example usage:
let theJonathans = {
    children: [
        {
            name: 'KEVIN'
        },
        {
            name: 'JEREMIAH',
            children: [
                {
                    name: 'HUMMELS',
                    children: [{
                        name: 'ESTHER'
                    }]
                },
                {
                    name: 'KEMBOI'
                },
                {
                    name: 'ESLEY'
                }
            ]
        },
        {
            name: 'SIAKAM',
            children: [
                {
                    name: 'CARLOS'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

console.log(getDescendants(theJonathans));

