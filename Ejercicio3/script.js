document.getElementById("boton").addEventListener("click",function(){
    const input=document.getElementById("buscar").value.toLocaleLowerCase();
    const tabla=document.getElementById("tabla");
    const filas=tabla.getElementsByTagName("tr");
    let contador=0;

    for (let i = 1; i < filas.length; i++) { 
        const cells = filas[i].getElementsByTagName("td"); 
        for (let j = 0; j < cells.length; j++) { 
            const cell = cells[j]; 
            const cellText = cell.innerText.toLowerCase(); 
            if (cellText.includes(input) && input !== "") { 
                const regex = new RegExp(`(${input})`, 'gi'); 
                cell.innerHTML = cell.innerText.replace(regex, '<mark>$1</mark>');
                contador += (cellText.match(regex) || []).length; 
            } else 
            { // Remover el resaltado si no hay coincidencias 
                cell.innerHTML = cell.innerText;
            };
            
        };
    };
    document.getElementById("contador").innerText = `Coincidencias: ${contador}`;
});