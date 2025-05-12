import React from "react";

interface EmptyStateProps {
  message: string;
}

const NoResults: React.FC<EmptyStateProps> = ({ message }) => (
  <div className="text-textSecondary text-center">
    <p>{message}</p>
  </div>
);

export default NoResults;
