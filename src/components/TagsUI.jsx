import React, { useState } from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  min-height: 48px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
  border-radius: 4px;
`;

const TagTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  text-transform: capitalize;
  line-height: 24px;
  background-color: #008bf8;
  padding: 6px 18px;
  margin: 6px;
  border-radius: 40px;
`;

const CrossIcon = styled.img`
  height: 16px;
  margin-left: 5px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  min-height: 48px;
  min-width: 60px;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  color: #008bf8;
  border: transparent;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 12px;
  outline: none;
  font-family: "Inter", sans-serif;
`;

const Title = (props) => {
  const { title, id } = props;
  return (
    <TagTitle>
      <span>{title.text}</span>
      <CrossIcon src={Cross} onClick={() => props.removeTitle(id)} />
    </TagTitle>
  );
};

const TagInput = (props) => {
  const [value, setValue] = useState(props.value);

  const tagEvent = (e) => {
    const tagGroup = value.split(" ");
    const titles = props.titles;
    const hasTitles = Object.keys(titles).length > 0;

    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      tagGroup.map((tag) => props.addTitle(tag));
      setValue("");
    }

    if (e.keyCode === 8 && hasTitles && tag === "") {
      e.preventDefault();
      props.editLastTitle();
      setValue("");
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        name="new-item"
        placeholder="Type and press space"
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => tagEvent(e)}
      />
    </InputWrapper>
  );
};

const TagUi = (props) => {
  const [uiState, setUiState] = useState({
    titles: [],
  });
  const [currentValue, setCurrentValue] = useState("");

  const addTitle = (title) => {
    const uniqid = () => Math.random().toString(36).substr(2, 9);

    const { titles } = uiState;
    const newTitleId = uniqid();
    titles[newTitleId] = { text: title };
    setUiState({
      titles,
    });
    props.getTags(titles);
  };

  const removeTitle = (id) => {
    const { titles } = uiState;
    delete titles[id];
    setUiState({ titles });
  };

  const editLastTitle = () => {
    const { titles } = uiState;
    const lastTitleValue = Object.keys(titles).slice(-1).pop();
    setCurrentValue(titles[lastTitleValue].text);
    delete titles[lastTitleValue];
    setUiState({
      titles,
    });
    setCurrentValue("");
  };

  return (
    <FieldContainer>
      {Object.keys(uiState.titles).map((key) => (
        <Title
          key={key}
          id={key}
          title={uiState.titles[key]}
          removeTitle={removeTitle}
        />
      ))}
      <TagInput
        addTitle={addTitle}
        editLastTitle={editLastTitle}
        titles={uiState.titles}
        value={currentValue}
      />
    </FieldContainer>
  );
};

export default TagUi;
