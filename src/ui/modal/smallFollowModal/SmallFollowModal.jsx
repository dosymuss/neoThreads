import styles from "./SmallModal.module.css";

const SmallFollowModal = ({ children, active, setActive }) => {
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={active ? styles.modalActive : styles.modal}
    >
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default SmallFollowModal;
