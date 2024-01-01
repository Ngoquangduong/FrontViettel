import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditorTiny() {
  return (
    <Editor
      apiKey="5p95o03wask44rwei7jmm0ccgru5ypm69my8797tkmk45gnj"
      
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}
