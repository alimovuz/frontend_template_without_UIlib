interface FileBoxProps {
  item: {
    url?: string;
    name: string;
  };
  onRemove: () => void;
  isLoading?: boolean;
}

interface ShowFileBoxProps {
  url: string;
  label: string;
  size: number | string;
}

export type {FileBoxProps, ShowFileBoxProps}