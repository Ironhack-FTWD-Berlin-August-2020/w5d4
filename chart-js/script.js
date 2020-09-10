const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo'


const printTheChart = stockData => {
    // first get the daily data
    const dailyData = stockData['Time Series (Daily)'];
    console.log({ dailyData });
    // this is the data for the x axis:
    const stockDates = Object.keys(dailyData);
    console.log({ stockDates });
    stockDates.reverse();
    // this is the data for the y axis:
    const stockPrices = stockDates.map(date => {
        return dailyData[date]['4. close'];
    });
    console.log({ stockPrices });

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: stockDates,
            datasets: [
                {
                    label: 'Stock Chart',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: stockPrices
                }

            ]
        }
    })
}

axios
    .get(apiUrl)
    .then(response => {
        console.log(response.data);
        printTheChart(response.data);
    })
    .catch(err => {
        console.log('Error while getting the data', err);
    })

