function generateSankey() {
    const fileInput = document.getElementById('data-input');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const dataInput = e.target.result.trim();
        const lines = dataInput.split('\n');
        const transactions = lines.map(line => {
            const [time, stock, board, price, lot, bt, buy, sell, bs] = line.split('\t');
            return { buy, sell, lot: parseInt(lot.replace(/,/g, '')) };
        });

        const buyCounts = {};
        const sellCounts = {};

        transactions.forEach(({ buy, sell, lot }) => {
            if (buy in buyCounts) {
                buyCounts[buy] += lot;
            } else {
                buyCounts[buy] = lot;
            }

            if (sell in sellCounts) {
                sellCounts[sell] += lot;
            } else {
                sellCounts[sell] = lot;
            }
        });

        const topBuyBrokers = Object.entries(buyCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(entry => entry[0]);

        const topSellBrokers = Object.entries(sellCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(entry => entry[0]);

        const topBuyBrokersSet = new Set(topBuyBrokers);
        const topSellBrokersSet = new Set(topSellBrokers);

        const filteredTransactions = transactions.filter(t => topBuyBrokersSet.has(t.buy) && topSellBrokersSet.has(t.sell));

        const nodes = [];
        const links = [];

        filteredTransactions.forEach(({ buy, sell, lot }) => {
            const buyNode = `${buy} (Buy)`;
            const sellNode = `${sell} (Sell)`;

            if (!nodes.includes(buyNode)) nodes.push(buyNode);
            if (!nodes.includes(sellNode)) nodes.push(sellNode);

            const sourceIndex = nodes.indexOf(buyNode);
            const targetIndex = nodes.indexOf(sellNode);

            const link = links.find(link => link.source === sourceIndex && link.target === targetIndex);
            if (link) {
                link.value += lot;
            } else {
                links.push({ source: sourceIndex, target: targetIndex, value: lot });
            }
        });

        const trace = {
            type: "sankey",
            orientation: "h",
            node: {
                pad: 15,
                thickness: 30,
                line: {
                    color: "black",
                    width: 0.5
                },
                label: nodes
            },
            link: {
                source: links.map(d => d.source),
                target: links.map(d => d.target),
                value: links.map(d => d.value)
            }
        };

        const layout = {
            title: "Sankey Diagram Broker Transactions",
            font: {
                size: 12
            }
        };

        Plotly.newPlot('sankey-diagram', [trace], layout);
    };

    reader.readAsText(file);
}