    var choiceForm = document.getElementById('ipform');
    var resultImage = document.getElementById('resultImage');

    // Add a submit event listener to the form

    function result(){
        // Get the selected choice
        const selectedChoice = document.querySelector('input[name="favclub"]:checked');

        if (selectedChoice) {
            var choiceValue = selectedChoice.value;

            // Display the corresponding image based on the selected choice
            if (choiceValue === 'Manchester City') {
                alert("Congrats to the Treble winners");
                return true;
            } else if (choiceValue === 'Manchester United') {
                alert("Red Devils a Legendary Club");
                return true;
            } else if (choiceValue === 'Paris Saint Germain') {
                alert("World's most expensive club");
                return true;
            } else if (choiceValue === 'Barcelona') {
                alert("Mere Shell of its former glory");
                return true;
            } else if (choiceValue === 'Bayern Munich') {
                alert("Chamions of Germany");
                return true;
            } else if (choiceValue === 'Al - Nassr') {
                alert("Champions of Saudi Arabia and CR7 Home");
                return true;
            } else if (choiceValue === 'Real Madrid') {
                alert('The Most decorated club in History of the UCL');
                return true;
            }

        } else {
            // No choice selected, display an error message or take other actions
            alert('Please select a choice.');
            return false;
        }
}
