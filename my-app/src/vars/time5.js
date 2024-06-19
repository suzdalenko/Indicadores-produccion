
/* inseÃ±amos el tiempo */
export function getCurrentDateTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');

    let day = currentDate.getDate().toString().padStart(2, '0');
    let mes = currentDate.getMonth().toString().padStart(2, '0');
    
    return {date:' '+day+'/'+mes, time: hours+':'+minutes};
}