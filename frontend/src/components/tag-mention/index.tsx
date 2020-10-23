import { Tag } from "@/models/tag";
import { useServices } from "@/services";
import { Mentions } from "antd";
import React, { useEffect, useState } from "react";
import { from, Subscription } from "rxjs";

const { Option } = Mentions;

export const TagMention: React.FC<any> = (props) => {
  const [tag, setTag] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [lockMentions, setLockMentions] = useState(false);
  const { tagService } = useServices();
  const subscriptions: Subscription[] = [];
  useEffect(() => {
    if (tag.length) {
      getTagSuggestions();
    }
  }, [tag]);

  const getTagSuggestions = () => {
    subscriptions.push(
      from(tagService().getSuggestions(tag)).subscribe((res: any) => {
        setSuggestions(res?.data?.map((tag: Tag) => tag.name));
      })
    );
  };

  const addTag = () => {
    setLockMentions(true);
    subscriptions.push(
      from(tagService().addTag(tag.toLowerCase())).subscribe(
        () => {
          setLockMentions(false);
        },
        () => {
          setLockMentions(false);
        }
      )
    );
  };
  return (
    <Mentions
      {...props}
      placeholder="Type # to mention tags"
      prefix={["#"]}
      onSearch={setTag}
      readOnly={lockMentions || props.readOnly}
    >
      {suggestions.map((tag, index) => (
        <Option key={tag} value={tag}>
          {tag}
        </Option>
      ))}
      {!suggestions.length && !!tag.length && (
        <Option value={tag}>
          <span onClick={addTag}>
            Add tag <b>{tag}</b>
          </span>
        </Option>
      )}
    </Mentions>
  );
};
