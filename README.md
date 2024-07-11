# Sankey Diagram Generator

A simple web application to generate Sankey diagrams from stock transaction data. This tool helps visualize broker transactions effectively.

## Features

- **Upload Stock Data**: Upload your stock transaction data in TXT format.
- **Generate Sankey Diagrams**: Visualize the data with a Sankey diagram.
- **Top Brokers Analysis**: Focus on the top 10 brokers by transaction volume.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Live Server Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sep-ae/sankey-diagram.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd sankey-diagram
   ```

3. **Open the project in Visual Studio Code:**

   ```bash
   code .
   ```

4. **Run the application with Live Server:**
   - Right-click on the `index.html` file and select "Open with Live Server".

### Usage

1. **Prepare your stock data:**
   - Download the detailed stock data for a particular stock.
   - Copy all the data (Ctrl + A) and paste it into a Notepad file.
   - Save the file with a `.txt` extension.

2. **Upload and Generate:**
   - Open the application in your browser (served by Live Server).
   - Use the form to upload the TXT file containing your stock data.
   - Click "Generate Sankey Diagram" to visualize the transactions.

## Example Data Format

Ensure your data file follows this tab-separated format:

```
time\tstock\tboard\tprice\tlot\tbt\tbuy\tsell\tbs
2021-07-01\tAAPL\tXNAS\t145.64\t100\tB\tBROKER1\tBROKER2\tB
2021-07-01\tAAPL\tXNAS\t145.66\t200\tB\tBROKER3\tBROKER1\tS
...
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Plotly](https://plotly.com/javascript/sankey-diagram/) for providing the visualization library.
- [Visual Studio Code](https://code.visualstudio.com/) for the development environment.

---

Made with ❤️ by [sep-ae](https://github.com/sep-ae)
```

Anda dapat menyesuaikan bagian "Example Data Format" dan lainnya sesuai dengan kebutuhan spesifik proyek Anda. Pastikan untuk menyimpan file ini sebagai `README.md` di root direktori proyek Anda.
