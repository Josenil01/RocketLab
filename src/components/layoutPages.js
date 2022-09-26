

export const LayoutComponents = (props) => {
    return (
        <div className="container" >
            <div className="container-background">
                <div className="container-wrap">
                    {props.children}
                </div>
            </div>
        </div >
    );
};