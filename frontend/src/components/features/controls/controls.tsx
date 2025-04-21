import { useParams } from "react-router";
import React from "react";
import { AgentControlBar } from "./agent-control-bar";
import { AgentStatusBar } from "./agent-status-bar";
import { SecurityLock } from "./security-lock";
import { useUserConversation } from "#/hooks/query/use-user-conversation";
import { ConversationCard } from "../conversation-panel/conversation-card";
import { useAutoTitle } from "#/hooks/use-auto-title";

interface ControlsProps {
  setSecurityOpen: (isOpen: boolean) => void;
  showSecurityLock: boolean;
}

export function Controls({ setSecurityOpen, showSecurityLock }: ControlsProps) {
  const params = useParams();
  const { data: conversation } = useUserConversation(
    params.conversationId ?? null,
  );
  useAutoTitle();

  const conversationId = conversation?.conversation_id;
  const selectedRepository = conversation?.selected_repository;
  const isZ360 = selectedRepository?.includes("Z360");

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AgentControlBar />
        <AgentStatusBar />

        {showSecurityLock && (
          <SecurityLock onClick={() => setSecurityOpen(true)} />
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Z360 Specific Buttons */}
        {isZ360 && conversationId && (
          <div className="mt-2 flex items-center space-x-2">
            <a
              href={`https://admin---${conversationId}.openhands.zikrainfotech.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-xs border border-primarylight text-primarylight rounded hover:bg-primarylight hover:text-black transition-colors duration-150"
              onClick={(e) => e.stopPropagation()} // Prevent card click
              title="Open SaaS Admin"
            >
              SaaS Instance
            </a>
            <a
              href={`https://main---${conversationId}.openhands.zikrainfotech.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-xs border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors duration-150"
              onClick={(e) => e.stopPropagation()} // Prevent card click
              title="Open Main Instance"
            >
              Main Instance
            </a>
          </div>
        )}
        <ConversationCard
          variant="compact"
          showOptions
          title={conversation?.title ?? ""}
          lastUpdatedAt={conversation?.created_at ?? ""}
          selectedRepository={conversation?.selected_repository ?? null}
          status={conversation?.status}
          conversationId={conversation?.conversation_id}
        />
      </div>
    </div>
  );
}
