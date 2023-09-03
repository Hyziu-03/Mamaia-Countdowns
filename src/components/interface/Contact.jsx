export default function Contact(props) {
    const { firstInput, secondInput, secondInputType, thirdInput } = props;
    return (
        <form
            action=""
            method=""
            className="form article"
            id="form"
            onSubmit={event => event.preventDefault()}
        >
            <input
                type="text"
                name="name"
                id="text-input"
                className="input touch-target text-input"
                placeholder={firstInput}
                maxLength="20" 
            />
            <input
                type={secondInputType}
                name="email"
                id="email"
                className="input touch-target email"
                placeholder={secondInput}
                maxLength="40" 
            />
            <textarea
                placeholder={thirdInput}
                className="input textarea touch-target message"
                id="message"
                name="message"
                maxLength={40} 
            />
        </form>
    );
}
