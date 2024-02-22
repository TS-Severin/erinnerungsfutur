import { useEffect } from "react";
import useLocalStorageState from 'use-local-storage-state'

export default function TimelinePreview({entries,  }) {

    console.log("vorschau: ", entries);

    //   const [previewIsHovered, setPreviewIsHovered] = useState(false);
  const [previewIsClicked, setPreviewIsClicked] = 
  useLocalStorageState(
    "previewIsClicked",
    {
      defaultValue: [false],
    }
  );

    // SETTING CLICK STATE

  // Bring entry-id and clickedState false into one object
  const initializePreviewIsClickedState = () => {
    const initialState = entries.map(entry => ({ id: entry.id, clicked: false }));
    setPreviewIsClicked(initialState);
  };

  // do it once when loading
  useEffect(() => {
    initializePreviewIsClickedState();
  }, []);

  // toggle state when clicking
  const handlePreviewClick = (id) => {
    setPreviewIsClicked(prevState =>
      prevState.map(entry => {
        if (entry.id === id) {
          return { ...entry, clicked: !entry.clicked };
        }
        return entry;
      })
    );
  };

  console.log('previewIsClicked state:', previewIsClicked);

    return (
        
        <button onClick={handlePreviewClick}>hello world</button>
    );
}

