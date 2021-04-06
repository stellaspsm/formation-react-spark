//JsDoc :
/**
 * 
 * @param {object} props 
 * @param {string} props.name 
 * @param {number} props.age 
 * @returns 
 */
function Hello(props) {
return (
<div className="Hello">
    Hello <b>{props.name}</b>
</div>
);

}

export default Hello