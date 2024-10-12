document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // in °C
    const windSpeed = 5; // in km/h

    function calculateWindChill(temp, speed) {
        if ((temp <= 10 && temp >= -50) && (speed > 4.8)) {
            return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
        } 
        return "N/A";
    }
    
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;

    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});