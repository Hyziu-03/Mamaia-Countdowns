export default function DialogBlueprint(props) {
    const { id, p, btn } = props;

    return (
        <dialog id={id} className="dialog">
            <p id={p}></p>
            <form method="dialog">
                <button className={`${btn} dialog-close btn`}></button>
            </form>
        </dialog>
    );
}
