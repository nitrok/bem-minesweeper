[
    {
        shouldDeps: [
            { block: 'cell' },
            {
                block: 'grid',
                elems: ['line'],
            },
            { mods: { state: ['gaming', 'intro', 'gameover', 'won'] } },
            { block: 'i-bem', elem: 'dom' }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'i-bem', tech: 'bemhtml' }
        ]
    }

]
