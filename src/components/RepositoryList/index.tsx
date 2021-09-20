import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import "../../styles/repositories.scss";

const repoMock = {
  name: "test",
  description: "test description",
  link: "http://github",
};

interface Repository {
  id: string;
  name: string;
  description?: string;
  full_name: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ThaSMorato/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  );
};
