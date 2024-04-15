document.addEventListener('DOMContentLoaded', function () {
    fetch('country.json')
        .then(response => response.json())
        .then(data => {
            const countries = data.country;
            const tableBody = document.getElementById('tableBody');

            countries.forEach(country => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = country.name;
                row.insertCell(1).textContent = country.population.find(pop => pop["@year"] === "2011")?.["#text"] || 'N/A';
                row.insertCell(2).textContent = country["@capital"];
                row.insertCell(3).textContent = country["@memberships"];
                row.insertCell(4).textContent = country.gdp_total;
                row.insertCell(5).textContent = country.inflation;
                row.insertCell(6).textContent = country.unemployment;
                row.insertCell(7).textContent = country.government;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
