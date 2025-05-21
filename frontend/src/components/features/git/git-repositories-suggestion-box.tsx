import * as React from "react";


interface GitRepositoriesSuggestionBoxProps {
  handleSubmit: () => void;
  gitHubAuthUrl: string;
  user: any;
}

export const GitRepositoriesSuggestionBox: React.FC<GitRepositoriesSuggestionBoxProps> = ({
  handleSubmit,
  gitHubAuthUrl,
  user,
}) => {
  return (
    <div>
      <p>Git Repositories Suggestion Placeholder</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
