from datetime import datetime
from enum import Enum
from pydantic import BaseModel


class NodeType(str, Enum):
    Folder = 'Folder'
    File = 'File'


class FileNode(BaseModel):
    id:             str
    title:          str
    type:           NodeType
    extension:      str
    file_path:      str
    updated_at:     datetime

    class Config:
        use_enum_values = True
