import React from "react";
import styles from "./CommentList.module.css";

const CommentList = ({ comments }) => {
  return (
    comments.length > 0 && (
      <div className={styles.Comment__Container}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.Comment__Wrapper}>
            <h6 className={styles.Comment__Name}>{comment.name}</h6>
            <p className={styles.Comment__Message}>{comment.message}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default CommentList;
