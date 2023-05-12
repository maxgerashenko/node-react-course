
type Status = "info" | "warning" | "error";
type NotificationProps = {
  text: string;
  status: Status;
};
type User = {
  name: string;
};

export default function Conditions () {

    const showUsers = true,
        isLoading = true,
        users = [
            {"name": "Robin"},
            {"name": "Markus"}
        ],
        notificationStatus = {
            "text": "notification text",
            "status": "warning" as Status
        },
        NOTIFICATION_STATES = {
            "info": "Did you know? ...",
            "warning": "Be careful here ...",
            "error": "Something went wrong ..."
        },
        status = "info",
        status3 = {
            "text": "my text",
            "status": "warning" as Status
        },
        getNotificationObject = (text: string) => ({
            "info": `Did you know? ...${text}`,
            "warning": `Be careful here ...${text}`,
            "error": `Something went wrong ...${text}`
        }),
        messageProp = {
            "isExtrovert": true,
            "isVegetarian": false
        };

    function List ({users}: { users: User[] }) {

        return (
            <div>
                <ul>
                    {users.map((user) => (<li key={user.name}>
                            {" "}

{user.name}

{" "}
                        </li>))}
                </ul>
            </div>
        );

    }

    function LoadingIndicator ({isLoading}: { isLoading: boolean }) {

        return (<div>
{isLoading && <p>Loading...</p>}
</div>);

    }

    function Notification ({text, status}: NotificationProps) {

        return (
            <div>
                <h3>
                    Conditions
                </h3>

                {(() => {

                    switch (status) {

                    case "info":
                        return (<a>
{" "}
info component:{text} </a>);
                    case "warning":
                        return (<p>
{" "}
warning component:{text} </p>);
                    case "error":
                        return (<div>
{" "}
error component:{text} </div>);
                    default:
                        return null;

                    }

                })()}
            </div>
        );

    }

    function Notification2 ({status}: { status: Status }) {

        return (<div>
{NOTIFICATION_STATES[status]}
</div>);

    }

    function Notification3 ({status, text}: { status: Status; text: string }) {

        return (<div>
{getNotificationObject(text)[status]}
</div>);

    }

    function Message ({
        isExtrovert,
        isVegetarian
    }: {
    isExtrovert: boolean;
    isVegetarian: boolean;
  }) {

        const key = `${isExtrovert}-${isVegetarian}`;
        return (
            <div>
                <h3>
                    Conditions
                </h3>

                {
                    {
                        "true-true": <p>
                            I am an extroverted vegetarian.
                        </p>,
                        "true-false": <p>
                            I am an extroverted meat eater.
                        </p>,
                        "false-true": <p>
                            I am an introverted vegetarian.
                        </p>,
                        "false-false": <p>
                            I am an introverted meat eater.
                        </p>
                    }[key]
                }
            </div>
        );

    }

    return (
        <div>
            <h3>
                Conditions
            </h3>

            <h1>
                Hello StackBlitz!
            </h1>

            <p>
                Start editing to see some magic happen :)
            </p>

            <p>
                showUsers 1
                {showUsers
                    ? List({users})
                    : null}
            </p>

            <p>
                showUsers 2
                {showUsers
                    ? List({users})
                    : null}
            </p>

            <p>
                isLoading template 2
                {LoadingIndicator({isLoading})}
            </p>

            <p>
                Notification
                {Notification({...notificationStatus})}
            </p>

            <p>
                Notification2
                {Notification2({status})}
            </p>

            <p>
                Notification3
                {Notification3({...status3})}
            </p>

            <p>
                Message
                {Message({...messageProp})}
            </p>
        </div>
    );

}
