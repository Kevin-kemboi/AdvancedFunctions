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
            name: 'Elias'
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [{
                        name: 'Lily'
                    }]
                },
                {
                    name: 'Zoe'
                },
                {
                    name: 'Theo'
                }
            ]
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

console.log(getDescendants(theJonathans));
// Output: [ 'Elias', 'Sarah', 'Max', 'Lily', 'Zoe', 'Theo', 'Maria', 'Daniel', 'David' ]
