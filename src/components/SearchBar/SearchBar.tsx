import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState, type FormEvent } from "react";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const [query, setQuery] = useState("");
function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
    const formData = new FormData(form);
    const value = (formData.get("query") as string).trim();
        if (!value) {
            toast.error("Please enter your search query.");
            return;
        }
        onSubmit(value);
        setQuery("");
    }
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <a
              className={styles.link}
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by TMDB
            </a>
    
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                name="query"
                autoComplete="off"
                placeholder="Search movies..."
                autoFocus
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
              />
              <button className={styles.button} type="submit">
                Search
              </button>
            </form>
          </div>
        </header>
      );
    
}