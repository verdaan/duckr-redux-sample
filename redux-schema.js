/*
{
    users: {
        isAuthed,
        isFetching,
        error,
        authedId,
        [uid]: {
            lastUpdated,
            info: {
                name,
                uid,
                avatar,
            }
        }
    },
    modal: {
        duck,
        isOpen,
    }
    ducks: {
        isFetching,
        error,
        [duckId]: {
            lastUpdated,
            info: {
                avatar,
                duckId,
                name,
                text,
                timestamp,
                uid
            }
        }
    },
    usersDucks: {
        isFetching,
        error,
        [uid]: {
            lastUpdated,
            duckIds: [duckId, duckId, duckId]
        }
    },
    likeCount: {
        [duckId]: 0
    },
    usersLikes: {
        [duckId]: true
    },
    replies: {
        [duckId]: {
            replies: {
                isFetching,
                eror,
                [replyId]: {
                    lastUpdated,
                    name,
                    comment,
                    uid,
                    timestamp,
                    avatar,
                }
            }
        }
    },
    listeners: {
        [listenersId] = true
    },
    feed: {
        isFetching,
        error,
        newDucksAvailable,
        duckIdsToAdd: [duckIds]
        duckIds: [duckIds]
    }
}
*/