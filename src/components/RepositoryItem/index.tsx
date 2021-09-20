interface RepositoryItemProps {
  repository: {
    name: string;
    description?: string;
    full_name: string;
    html_url: string;
  };
}

export const RepositoryItem = ({
  repository: { name, description, full_name, html_url },
}: RepositoryItemProps) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description ?? full_name}</p>
      <a href={html_url}>Acessar repositorio</a>
    </li>
  );
};
