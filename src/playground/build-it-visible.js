let toggle = true;
const toggleBitch = () => {
    toggle = !toggle;
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleBitch}>{toggle ? 'Show details' : 'Hide details'}</button>
            {!toggle && <p>YEET</p>}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

render();