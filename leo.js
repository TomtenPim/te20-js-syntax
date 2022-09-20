// import javax.swing.*;

// public class pythagoras{
// 	public static void main (String[] arg) {
// 	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
// 	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
// 	double c = Math.sqrt(a*a + b*b);
// 	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
// 	}
// }

const aInput = document.querySelector('#inputA-field');
const bInput = document.querySelector('#inputB-field');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const a = aInput.value;
    const b = bInput.value;
    const c = Math.sqrt(a*a+b*b)
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    if (isNaN(c) == true){
        message.textContent = 'Du har du ju gjort något fel nu.'
    }else{
        message.textContent = `Hypotenusans längd är ${c} l.e.`;
    }
    messageBox.appendChild(message);
});