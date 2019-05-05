import React, { useState, useCallback, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
const Syntax = styled(SyntaxHighlighter)`
  width: 100%;
  margin: 2px;
`;
const TabContentContainer = styled.div`
  border: solid silver;
  border-width: 0px 1px 1px 1px;
  background-color: white;
  flex: 1;
  display: flex;
  overflow-y: auto;
`;
const TabHeaderContainer = styled.div`
  border: solid silver;
  border-width: 0px 0px 1px 0px;
  display: flex;
  flex-direction: row;
`;
const TabHeaderButton = styled.button`
  outline: none;
  cursor: pointer;
  margin-bottom: 1px;
  border: none;
  padding: 10px;
  background-color: ${props => (props.isSelected ? "darkgreen" : "white")};
  color: ${props => (props.isSelected ? "white" : "silver")};
`;
const ConsoleLineContainer = styled.div``;
const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

const TaskDescriptionContainer = styled.div`
  margin: 20px;
`;
const RunButton = styled.button`
  align-self: flex-start;
  margin: 20px;

  padding: 10px;
  background-color: darkgreen;
  color: white;
  outline: none;
  border: 0px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
const OutputContainer = styled.div`
  border: 1px solid silver;
  flex: 1;
  background-color: black;
  color: green;
  overflow-y: auto;
  padding: 10px;
`;

export const LabSolutionPresenter = props => {
  const [outputLines, setOutputLines] = useState([]);

  const { solution, code } = props;

  const runSolution = useCallback(() => {
    const newLines = [];

    const output = {
      write: (value, style) => {
        newLines.push({ value, style });
        setOutputLines([...newLines]);
      },
      clear: () => {
        setOutputLines([]);
      }
    };

    setOutputLines(newLines);
    if (solution.testCases && solution.testCases.length > 0) {
      solution.testCases.forEach(element => {
        solution.solution(element, output);
      });
    } else {
      solution.solution("", output);
    }
  }, [solution]);

  useEffect(() => {
    runSolution();
  }, [runSolution]);
  return (
    <Container>
      <TaskDescriptionContainer>{solution.task}</TaskDescriptionContainer>

      <TabView
        tabs={[
          {
            name: "output",
            title: "Output",
            component: () => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%"
                }}
              >
                <RunButton
                  onClick={() => {
                    runSolution();
                  }}
                >
                  RUN
                </RunButton>

                <OutputContainer>
                  {outputLines.map(e => (
                    <ConsoleLine lineText={e.value} style={e.style} />
                  ))}
                </OutputContainer>
              </div>
            )
          },
          {
            name: "code",
            title: "Code",
            component: () => (
              <Syntax language="javascript" style={docco}>
                {code}
              </Syntax>
            )
          }
        ]}
      />
    </Container>
  );
};

const TabView = ({ tabs }) => {
  const [activeTabName, setActiveTabName] = useState(tabs[0].name);
  const activeTab = tabs.find(e => e.name === activeTabName);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        margin: "10px"
      }}
    >
      <TabHeader
        tabs={tabs}
        onSelectTab={name => setActiveTabName(name)}
        selectedTabName={activeTabName}
      />
      <TabContentContainer>{activeTab.component()}</TabContentContainer>
    </div>
  );
};

const TabHeader = ({ tabs, onSelectTab, selectedTabName }) => {
  return (
    <TabHeaderContainer>
      {tabs.map(t => (
        <TabHeaderItem
          isSelected={t.name === selectedTabName}
          title={t.title}
          onClick={() => {
            onSelectTab(t.name);
          }}
        />
      ))}
    </TabHeaderContainer>
  );
};
const TabHeaderItem = ({ title, onClick, isSelected }) => {
  return (
    <TabHeaderButton isSelected={isSelected} onClick={onClick}>
      {title}
    </TabHeaderButton>
  );
};
const ConsoleLine = ({ lineText, style }) => (
  <ConsoleLineContainer style={style}>{lineText}</ConsoleLineContainer>
);
