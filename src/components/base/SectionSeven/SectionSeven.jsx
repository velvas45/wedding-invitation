import React, { useEffect, useState } from "react";
import styles from "./SectionSeven.module.css";
import Logo from "../../../assets/img/logo_wedding.png";
import Button from "../../Button/Button";
import CommentList from "../../CommentList/CommentList";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";

import useFetch from "../../../hooks/useFetch";

import Loader from "../../Loader/Loader";

import {
  client,
  comment_query_list_with_groq,
} from "../../../lib/sanity/client";
import { getDateNow } from "../../../lib/utils/getDateNow";

const SectionSeven = () => {
  const { mutate } = useSWRConfig();
  const { data: comments } = useFetch(
    comment_query_list_with_groq,
    (query) => client.fetch(query),
    {
      revalidateOnFocus: true,
      refreshInterval: 1000,
    }
  );

  const [formData, setFormData] = useState({
    name: undefined,
    message: undefined,
  });

  const [loading, setLoading] = useState(false);

  // const [comments, setComments] = useState([]);

  const addForm = async () => {
    try {
      const dateNow = new Date();
      if (formData.name && formData.message) {
        setLoading(true);
        const payload = {
          _type: "comment",
          name: formData.name,
          message: formData.message,
          created_at: getDateNow(dateNow),
        };
        await client.create(payload);

        toast("your prayers are saved, thank you.", {
          toastId: "update-prayer",
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
        });

        await mutate(comment_query_list_with_groq);
        setFormData({
          name: undefined,
          message: undefined,
        });
        setLoading(false);
      } else {
        toast("Please input name and fill the message.", {
          type: "error",
          toastId: "update-prayer",
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
        });
      }
    } catch (error) {
      toast("Failed to save the messages, try again.", {
        type: "error",
        toastId: "update-prayer",
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      });

      setLoading(false);
    }
  };

  const onChangeData = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className={styles.Section_Seven}>
      <img
        src={Logo}
        className="logo_wedding"
        alt="Logo"
        width={150}
        height={150}
        loading="lazy"
      />

      <div className={styles.Section_Seven__Card}>
        <h3 className={styles.Section_Seven__Title}>
          SEND PRAYERS AND CONGRATULATIONS
        </h3>

        <form>
          <div className={styles.Form_Control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChangeData}
              value={formData.name}
            />
          </div>
          <div className={styles.Form_Control}>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              onChange={onChangeData}
              value={formData.message}
            />
          </div>
          <Button
            style={{ width: "100px", marginTop: "1rem", height: "30px" }}
            type="primary"
            title="SEND"
            onClick={() => addForm()}
          />
        </form>

        {/* comment list */}
        {loading || !comments ? (
          <Loader />
        ) : (
          <CommentList comments={comments} />
        )}
      </div>
    </section>
  );
};

export default SectionSeven;
