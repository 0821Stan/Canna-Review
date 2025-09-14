import { supabase } from "../supabaseClient";

function Auth() {
  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className="p-4">
      <button
        onClick={signInWithGoogle}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Sign in with Google
      </button>
      <button
        onClick={signOut}
        className="ml-2 px-4 py-2 bg-red-600 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Auth;
