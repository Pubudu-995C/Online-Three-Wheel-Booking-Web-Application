
import { FacebookProvider, CustomChat } from "react-facebook";
export default function WhatsApp() {
  return (
    <div>
      <FacebookProvider appId="3710999875843468" chatSupport>
        <CustomChat pageId="278900941972876" minimized={true} />
      </FacebookProvider>
    </div>
  );
}
