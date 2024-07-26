import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendItem}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
